const ClienteCtrl = {}
const Task = require('../model/model.cliente')

ClienteCtrl.getClient = async ( req, res ) => {
    const taskfind = await Task.find()
    res.json(taskfind)  
};

ClienteCtrl.createClient = async ( req, res ) => {
    const { ncliente, cpuser, cpwp, bbdname, bbduser, bbdpwd, wpuser, wppw } = req.body;
    const newTask = new Task({ncliente, cpuser, cpwp, bbdname, bbduser, bbdpwd, wpuser, wppw});
    await newTask.save();
    res.json({Status: 'Datos Enviados'});
}

ClienteCtrl.updateClient = async (req, res) => {
    const { ncliente, cpuser, cpwp, bbdname, bbduser, bbdpwd, wpuser, wppw } = req.body;
    const putCliente = { ncliente, cpuser, cpwp, bbdname, bbduser, bbdpwd, wpuser, wppw };
    await Task.findOneAndUpdate({_id: req.params.id}, putCliente);
    res.json({Status: 'Datos Actualizados'});
}

ClienteCtrl.deleteClient = async ( req, res ) => {
   await Task.findOneAndRemove({_id: req.params.id})
   res.json({Status: 'Datos Eliminados Correctamente'})
}

ClienteCtrl.getClientbyId = async ( req, res ) => {
  const taskFinder = await Task.findOne({_id: req.params.id})
  res.json(taskFinder);
}

module.exports = ClienteCtrl;

