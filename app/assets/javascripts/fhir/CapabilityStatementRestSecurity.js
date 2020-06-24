const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const CapabilityStatementRestSecuritySchema = BackboneElementSchemaFunction({
   cors : Boolean,
   service : [CodeableConceptSchema],
   description : String,
   fhirTitle: { type: String, default: 'CapabilityStatementRestSecurity' },
});

class CapabilityStatementRestSecurity extends mongoose.Document {
  constructor(object) {
    super(object, CapabilityStatementRestSecuritySchema);
    this._type = 'FHIR::CapabilityStatementRestSecurity';
  }
};


module.exports.CapabilityStatementRestSecuritySchema = CapabilityStatementRestSecuritySchema;
module.exports.CapabilityStatementRestSecurity = CapabilityStatementRestSecurity;
