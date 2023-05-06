
const Currency = ({product_price}) => {
  return Intl.NumberFormat("en-IN",{
        style: 'currency',
        currency:"INR",
        maximumFractionDigits:2,
  }).format(product_price / 1)
}

export default Currency