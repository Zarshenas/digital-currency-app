const symbolHandler = (currency) => {
    switch (currency) {
        case 'usd':
            return '$'
        case 'eur':
            return '€'
        case 'jpy':
            return '¥'
        case 'btc':
            return '₿'
        case 'eth':
            return '⟠'
    
        case 'bnb':
            return '❖'
    }
}

export default symbolHandler;