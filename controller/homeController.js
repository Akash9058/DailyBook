module.exports.home= function(req,res){
    res.render('home',{
        title: 'Dailybook',
    })
};

module.exports.sign_Up = (req,res)=>{
    res.render('user_sign_up',{
        title:'Issuse Tracker||SignUp',
    });
};

module.exports.sign_In = (req,res)=>{
    res.render('user_sign_in',{
        title:'Issuse Tracker|| SignIn'
    })
}

module.exports.profile=(req,res)=>{
    res.render('user_profile',{
        title:'Issuse Tracker||Profile'
    })
}