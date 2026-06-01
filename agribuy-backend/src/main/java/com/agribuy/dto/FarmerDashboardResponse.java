package com.agribuy.dto;

public class FarmerDashboardResponse {

    private Long totalProducts;
    private Double totalInventory;
    private Double averagePrice;
    private Long categoryCount;
    private String highestPricedProduct;

    public Long getTotalProducts() {
        return totalProducts;
    }

    public void setTotalProducts(Long totalProducts) {
        this.totalProducts = totalProducts;
    }

    public Double getTotalInventory() {
        return totalInventory;
    }

    public void setTotalInventory(Double totalInventory) {
        this.totalInventory = totalInventory;
    }

    public Double getAveragePrice() {
        return averagePrice;
    }

    public void setAveragePrice(Double averagePrice) {
        this.averagePrice = averagePrice;
    }
    
    public Long getCategoryCount() {
        return categoryCount;
    }

    public void setCategoryCount(Long categoryCount) {
        this.categoryCount = categoryCount;
    }

	public String getHighestPricedProduct() {
		return highestPricedProduct;
	}

	public void setHighestPricedProduct(String highestPricedProduct) {
		this.highestPricedProduct = highestPricedProduct;
	}
    
    
}
