const convertChartData = (data,type) => {
    const convertedData = data[type].map(item =>{
        const date = new Date(item[0])
        return {
            date:date.toLocaleDateString('en-US'),
            [type]:item[1]
        }
    })

    return convertedData;
}

export {convertChartData}