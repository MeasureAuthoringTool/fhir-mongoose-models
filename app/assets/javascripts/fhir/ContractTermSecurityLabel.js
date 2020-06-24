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

const ContractTermSecurityLabelSchema = BackboneElementSchemaFunction({
   number : [Number],
   classification : CodingSchema,
   category : [CodingSchema],
   control : [CodingSchema],
   fhirTitle: { type: String, default: 'ContractTermSecurityLabel' },
});

class ContractTermSecurityLabel extends mongoose.Document {
  constructor(object) {
    super(object, ContractTermSecurityLabelSchema);
    this._type = 'FHIR::ContractTermSecurityLabel';
  }
};


module.exports.ContractTermSecurityLabelSchema = ContractTermSecurityLabelSchema;
module.exports.ContractTermSecurityLabel = ContractTermSecurityLabel;
