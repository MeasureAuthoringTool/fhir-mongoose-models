const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductNameNamePartSchema = BackboneElementSchemaFunction({
   part : String,
   type : CodingSchema,
   fhirTitle: { type: String, default: 'MedicinalProductNameNamePart' },
});

class MedicinalProductNameNamePart extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductNameNamePartSchema);
    this._type = 'FHIR::MedicinalProductNameNamePart';
  }
};


module.exports.MedicinalProductNameNamePartSchema = MedicinalProductNameNamePartSchema;
module.exports.MedicinalProductNameNamePart = MedicinalProductNameNamePart;
