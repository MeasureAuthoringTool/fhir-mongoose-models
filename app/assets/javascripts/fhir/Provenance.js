const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { PeriodSchema } = require('./Period');
const { ProvenanceAgentSchema } = require('./ProvenanceAgent');
const { ProvenanceEntitySchema } = require('./ProvenanceEntity');
const { ReferenceSchema } = require('./Reference');
const { SignatureSchema } = require('./Signature');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ProvenanceSchema = DomainResourceSchemaFunction({
   target : [ReferenceSchema],
   occurredPeriod : PeriodSchema,
   occurredDateTime : DateTime,
   recorded : DateTime,
   policy : [String],
   location : ReferenceSchema,
   reason : [CodeableConceptSchema],
   activity : CodeableConceptSchema,
   agent : [ProvenanceAgentSchema],
   entity : [ProvenanceEntitySchema],
   signature : [SignatureSchema],
   fhirTitle: { type: String, default: 'Provenance' },
});

class Provenance extends mongoose.Document {
  constructor(object) {
    super(object, ProvenanceSchema);
    this._type = 'FHIR::Provenance';
  }
};


module.exports.ProvenanceSchema = ProvenanceSchema;
module.exports.Provenance = Provenance;
