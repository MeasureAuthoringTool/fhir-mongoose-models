const mongoose = require('mongoose/browser');
const { AuditEventAgentNetworkSchema } = require('./AuditEventAgentNetwork');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { CodingSchema } = require('./Coding');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const AuditEventAgentSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   role : [CodeableConceptSchema],
   who : ReferenceSchema,
   altId : String,
   name : String,
   requestor : Boolean,
   location : ReferenceSchema,
   policy : [String],
   media : CodingSchema,
   network : AuditEventAgentNetworkSchema,
   purposeOfUse : [CodeableConceptSchema],
   fhirTitle: { type: String, default: 'AuditEventAgent' },
});

class AuditEventAgent extends mongoose.Document {
  constructor(object) {
    super(object, AuditEventAgentSchema);
    this._type = 'FHIR::AuditEventAgent';
  }
};


module.exports.AuditEventAgentSchema = AuditEventAgentSchema;
module.exports.AuditEventAgent = AuditEventAgent;
