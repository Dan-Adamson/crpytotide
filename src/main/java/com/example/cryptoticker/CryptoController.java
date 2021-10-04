package com.example.cryptoticker;

import java.util.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

import com.litesoftwares.coingecko.CoinGeckoApiClient;
import com.litesoftwares.coingecko.domain.Coins.CoinFullData;
import com.litesoftwares.coingecko.impl.CoinGeckoApiClientImpl;


@RestController
@RequestMapping("/api/crypto")
public class CryptoController {
    

    @GetMapping("/")
    public List<CryptoModel> getAllCryptoData() {
        List<CryptoModel> cryptoDataModels = new ArrayList<CryptoModel>();
        CoinGeckoApiClient client = new CoinGeckoApiClientImpl();
        for (int i = 0; i < CoinsController.COINS.length; i++) {
            CoinFullData fullData = client.getCoinById(CoinsController.COINS[i]);
            CryptoModel model = new CryptoModel(fullData.getId(), fullData.getName(), fullData.getSymbol(),
                    fullData.getMarketData().getCirculatingSupply(),
                    fullData.getMarketData().getMarketCapChangePercentage24h(), fullData.getMarketData().getMarketCap(),
                    fullData.getMarketData().getPriceChange24h(), fullData.getMarketData().getMarketCapRank(),
                    fullData.getMarketData().getHigh24h(), fullData.getMarketData().getLow24h(), fullData.getMarketData().getCurrentPrice());
            cryptoDataModels.add(model);
        }

        return cryptoDataModels;
    }
    
    @GetMapping("/{id}")
    public CryptoModel getCryptoDataByID(@PathVariable String id) {
        CoinGeckoApiClient client = new CoinGeckoApiClientImpl();
        try {
            CoinFullData fullData = client.getCoinById(id);
            return new CryptoModel(fullData.getId(), fullData.getName(), fullData.getSymbol(),
                fullData.getMarketData().getCirculatingSupply(),
                fullData.getMarketData().getMarketCapChangePercentage24h(), fullData.getMarketData().getMarketCap(),
                fullData.getMarketData().getPriceChange24h(), fullData.getMarketData().getMarketCapRank(),
                fullData.getMarketData().getHigh24h(), fullData.getMarketData().getLow24h(),
                fullData.getMarketData().getCurrentPrice());
        } catch (Exception e) {
            throw new CoinNotFoundException();
        }
        
        
    }
    
    @ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "CoinGecko coinID was not found!")
    public class CoinNotFoundException extends RuntimeException {
        private static final long serialVersionUID = 1L;

        public CoinNotFoundException() {
            super();
        }

        public CoinNotFoundException(String message) {
            super(message);
        }
    }
}
