const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { IdentifierSchema } = require('./Identifier');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicinalProductPackagedBatchIdentifierSchema = BackboneElementSchemaFunction({
   outerPackaging : IdentifierSchema,
   immediatePackaging : IdentifierSchema,
   fhirTitle: { type: String, default: 'MedicinalProductPackagedBatchIdentifier' },
});

class MedicinalProductPackagedBatchIdentifier extends mongoose.Document {
  constructor(object) {
    super(object, MedicinalProductPackagedBatchIdentifierSchema);
    this._type = 'FHIR::MedicinalProductPackagedBatchIdentifier';
  }
};


module.exports.MedicinalProductPackagedBatchIdentifierSchema = MedicinalProductPackagedBatchIdentifierSchema;
module.exports.MedicinalProductPackagedBatchIdentifier = MedicinalProductPackagedBatchIdentifier;
