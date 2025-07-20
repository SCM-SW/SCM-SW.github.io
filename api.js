const GExpress = require('express');
const GCrypto = require('crypto');
const GApp = GExpress();
const GPort = process.env.PORT || 3000;

GApp.use(GExpress.json());
 
let GCode = `Console.log('Hello, World!');`;
const GHash = `0a1051bc24125bb6d2941504f1af887d`;

    GApp.get('/', (Req, Res) => {
    Res.send('Welcome to the Qwerty API.');
});

GApp.get('/GCode', (Req, Res) => {
    const GExec = Req.query.GExec;
    const GPassInp = Req.query.GPass;
  
    if (GExec && GPassInp) {
        const GHashInp = GCrypto.createHash('md5').update(GPassInp).digest('hex');
        let GExecMsg = { GMsg: 'GExec failed!' };
            
        if (GHashInp == GHash) {
            GCode = GExec;
            GExecMsg = { GMsg: 'GExecuted!' };
        }
          
        return Res.json(GExecMsg);
    }
    
    Res.json({ GCode: GCode });
});

GApp.listen(GPort, '0.0.0.0', () => {
    console.log(`GExec alive! https://${GApp.get('host')}:${GPort}`);
});
   
