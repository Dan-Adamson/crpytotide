package com.example.cryptoticker;

import java.util.Map;
import java.text.DecimalFormat;

public class CryptoModel {

    private static final String USD_KEY = "usd";   
    private final DecimalFormat decimalFormat = new DecimalFormat("###,###,###.##");    
    
    private final String id;
    private final String currencyName;
    private final String currencySymbol;
    private final double circulatingSupply;
    private final double marketCapChangePercent24Hr;
    private final double marketCap;
    private final double priceChange24h;
    private final long marketCapRank;
    private final double high24Hr;
    private final double low24Hr;
    private final double currentPrice;


    public CryptoModel(String id, String currencyName, String currencySymbol, double circulatingSupply,
            double marketCapChangePercent24Hr, Map<String, Double> marketCap, double priceChange24h, long marketCapRank,
            Map<String, Double> high24Hr, Map<String, Double> low24Hr, Map<String, Double> currentPrice) {
        this.id = id;
        this.currencyName = currencyName;
        this.currencySymbol = currencySymbol;
        this.circulatingSupply = circulatingSupply;
        this.marketCapChangePercent24Hr = marketCapChangePercent24Hr;
        this.priceChange24h = priceChange24h;
        this.marketCap = marketCap.get(USD_KEY);
        this.marketCapRank = marketCapRank;
        this.high24Hr = high24Hr.get(USD_KEY);
        this.low24Hr = low24Hr.get(USD_KEY);
        this.currentPrice = currentPrice.get(USD_KEY);
    }

    public String getID() {
        return id;
    }

    public String getCurrencyName() {
        return currencyName;
    }

    public String getCurrencySymbol() {
        return currencySymbol;
    }
    
    public String getCirculatingSupply() {
        return returnDecimalFormat(circulatingSupply);
    }

    public double getMarketCapChangePercent24Hr() {
        return marketCapChangePercent24Hr;
    }

    public String getMarketCap() {
        return returnDecimalFormat(marketCap);
    }

    public long getMarketCapRank() {
        return marketCapRank;
    }
    
    public String getHigh24Hr() {
        return returnDecimalFormat(high24Hr);
    }

    public String getLow24Hr() {
        return returnDecimalFormat(low24Hr);
    }

    public String getPriceChange24h() {
        return returnDecimalFormat(priceChange24h);
    }

    public String getCurrentPrice() {
        return returnDecimalFormat(currentPrice);
    }

    private String returnDecimalFormat(double value) {
        return decimalFormat.format(value);
    }
}
