// GET VISIABLE EXPENSIVE
const adsSelector = (ads, { text }) => {
    return ads.filter((ads) => {
     
        return ads.description.toLowerCase().includes(text.toLowerCase());
       
        // const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        // return textMatch;
    })
    // .sort((a, b) => {
    //     if (sortBy === 'date') {
    //         return a.createdAt < b.createdAt ? 1 : -1;
    //     }
    //     else if (sortBy === 'amount') {
    //         return a.amount < b.amount ? 1 : -1;
    //     }

    // });
}

export default adsSelector;


//expense: state.expenses.find((expense) => expense.id === props.match.params.id)

// let filteredAds = ads.filter(ad =>{
        //     return ad._id === paramsId;
        // })