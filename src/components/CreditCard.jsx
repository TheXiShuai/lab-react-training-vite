const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const visaImagePath = '/img/visa.png';
    const masterCardImagePath = '/img/master-card.svg';
  
    return (
      <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
        <div className="bank-logo">
          <img src={bank} alt="Bank logo" />
        </div>
        <div className="card-type">
          <img src={type === 'Visa' ? visaImagePath : masterCardImagePath} alt={`${type} card`} />
        </div>
      </div>
    );
  };
  
  export default CreditCard;