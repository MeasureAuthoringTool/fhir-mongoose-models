const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { ReferenceSchema } = require('./Reference');
const { SignatureSchema } = require('./Signature');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ContractSignerSchema = BackboneElementSchemaFunction({
   type : CodingSchema,
   party : ReferenceSchema,
   signature : [SignatureSchema],
   fhirTitle: { type: String, default: 'ContractSigner' },
});

class ContractSigner extends mongoose.Document {
  constructor(object) {
    super(object, ContractSignerSchema);
    this._type = 'FHIR::ContractSigner';
  }
};


module.exports.ContractSignerSchema = ContractSignerSchema;
module.exports.ContractSigner = ContractSigner;
