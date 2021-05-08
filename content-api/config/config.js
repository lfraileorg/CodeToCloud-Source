exports.appSettings = {
    db: (function(){
        return process.env.MONGODB_CONNECTION || 'mongodb://cosmoslfdemo:snOs7mLecAW3jUGH2s6vVPLHUC6TICh7zwiw7rH0sa1ZrGZaplZKZZOn41sG8qANHDpkPIvgTpxveoCvwdlilA==@cosmoslfdemo.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@cosmoslfdemo@';
    })()
};
