package com.example.cryptoticker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/api/coins")
public class CoinsController {

    // limit the number of coins we get from coingecko
    // Future - either grab all coins from coin gecko and implement pagination of coins or infinite scroll
    // OR DB with accepted list of coins
    public static final String[] COINS = {
        "bitcoin", "ethereum", "cardano", "tether", "solana", "dogecoin", "stellar",
    };

    @GetMapping("/")
    public String[] getCoins() {
        return COINS;
    }

}
