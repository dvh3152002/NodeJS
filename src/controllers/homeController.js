let getHomePage=(req,res)=>{
    return res.render('homePage.ejs');
}

let getAboutPage=(req,res)=>{
    return res.render('test/aboutPage.ejs')
}

// object: {
//     key: '',
//     value: ''
// }

module.exports={
    getHomePage:getHomePage,
    getAboutPage:getAboutPage,
}