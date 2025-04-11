export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fr-CH', {
    style: 'currency',
    currency: 'CHF',
    minimumFractionDigits: 2,
  }).format(price);
};

export const calculateTotalPrice = (basePrice: number, quantity: number): number => {
  return basePrice * quantity;
};
