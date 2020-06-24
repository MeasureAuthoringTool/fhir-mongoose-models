const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ProvenanceAgentSchema = BackboneElementSchemaFunction({
   type : CodeableConceptSchema,
   role : [CodeableConceptSchema],
   who : ReferenceSchema,
   onBehalfOf : ReferenceSchema,
   fhirTitle: { type: String, default: 'ProvenanceAgent' },
});

class ProvenanceAgent extends mongoose.Document {
  constructor(object) {
    super(object, ProvenanceAgentSchema);
    this._type = 'FHIR::ProvenanceAgent';
  }
};


module.exports.ProvenanceAgentSchema = ProvenanceAgentSchema;
module.exports.ProvenanceAgent = ProvenanceAgent;
