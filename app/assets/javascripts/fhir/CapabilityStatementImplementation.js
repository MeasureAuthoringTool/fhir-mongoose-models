const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementImplementationSchema = BackboneElementSchemaFunction({
   description : String,
   url : String,
   custodian : ReferenceSchema,
   fhirTitle: { type: String, default: 'CapabilityStatementImplementation' },
});

class CapabilityStatementImplementation extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementImplementationSchema);
    this._type = 'FHIR::CapabilityStatementImplementation';
  }
};


module.exports.CapabilityStatementImplementationSchema = CapabilityStatementImplementationSchema;
module.exports.CapabilityStatementImplementation = CapabilityStatementImplementation;
