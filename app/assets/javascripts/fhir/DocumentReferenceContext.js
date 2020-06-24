const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const DocumentReferenceContextSchema = BackboneElementSchemaFunction({
   encounter : [ReferenceSchema],
   event : [CodeableConceptSchema],
   period : PeriodSchema,
   facilityType : CodeableConceptSchema,
   practiceSetting : CodeableConceptSchema,
   sourcePatientInfo : ReferenceSchema,
   related : [ReferenceSchema],
   fhirTitle: { type: String, default: 'DocumentReferenceContext' },
});

class DocumentReferenceContext extends mongoose.Document {
  constructor(object) {
    super(object, DocumentReferenceContextSchema);
    this._type = 'FHIR::DocumentReferenceContext';
  }
};


module.exports.DocumentReferenceContextSchema = DocumentReferenceContextSchema;
module.exports.DocumentReferenceContext = DocumentReferenceContext;
