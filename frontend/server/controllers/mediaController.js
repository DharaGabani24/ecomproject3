const Media = require('../models/mediaModal')
module.exports.createmedia = async function (req, res) {

  try {
    Media.uploadedAvtar(req, res, (err) => {
      Media.create({
        media_image: req.file.filename,
      }, (err, data) => {

        if (!data) {
          return res.send({ message: "Upload Image Please" });
        }

      })
      res.status(201).send({ sucess: true, message: "Add Successfully", });
    })
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};
module.exports.viewmedia = async function (req, res) {
  try {
    const medialist = await Media.find();
    res.status(200).send(medialist);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

module.exports.updatemedia = async function (req, res) {
    Media.uploadedAvtar(req, res, (err) => {

      Media.findByIdAndUpdate(req.body.id,{
        media_image: req.file.filename,
      }, (err, data) => {
        console.log(data);
        if (err) {
          console.log(err);
          return false;
        }
      })
    })
}
module.exports.singlemedia = async function (req, res) {``
  try {
    const mediaupdatess = await Media.findById(req.params.id, req.body);
    // console.log(mediaupdatess);
    res.send(mediaupdatess);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};
module.exports.deletemedia = async function (req, res) {
  try {
    const deletemedia = await Media.findByIdAndDelete(req.params.id);
    res.send(deletemedia);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};
