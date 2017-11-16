
app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }))

passport.use(new Strategy(function(username, pass, cb){
  var hashedPass = bcrypt.hashSync(pass)
  User.findOne({
    where: {
      username: username
    }
  }).then(function(user, err){
    if (err) { return cb(err); }
    if (!user) { 
    return cb(null, false); }
    if (!bcrypt.compareSync(pass, user.password)){ 
      return cb(null, false); }
    return cb(null, user);
  })
}))

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id).then(function (user) {
    cb(null, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req,res,next){
  if(req.user){
    res.locals.user = req.user.username
  }
  next()
})

app.get("/signin", function(req, res){
  res.render("auth/signin")
})

app.post("/signin", passport.authenticate('local', { 
  failureRedirect: '/signin',
  successRedirect: '/posts'
}))

app.use(function(req, res, callback){
  if(req.user){
    res.locals.currentUser = req.user.username
  }
})


