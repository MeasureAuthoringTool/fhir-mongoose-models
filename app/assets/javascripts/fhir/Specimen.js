const mongoose = require('mongoose/browser');
const DateTime = require('./basetypes/DateTime');
const { AnnotationSchema } = require('./Annotation');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { SpecimenCollectionSchema } = require('./SpecimenCollection');
const { SpecimenContainerSchema } = require('./SpecimenContainer');
const { SpecimenProcessingSchema } = require('./SpecimenProcessing');
const { SpecimenStatusSchema } = require('./SpecimenStatus');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SpecimenSchema = DomainResourceSchemaFunction({
   identifier : [IdentifierSchema],
   accessionIdentifier : IdentifierSchema,
   status : SpecimenStatusSchema,
   type : CodeableConceptSchema,
   subject : ReferenceSchema,
   receivedTime : DateTime,
   parent : [ReferenceSchema],
   request : [ReferenceSchema],
   collection : SpecimenCollectionSchema,
   processing : [SpecimenProcessingSchema],
   container : [SpecimenContainerSchema],
   condition : [CodeableConceptSchema],
   note : [AnnotationSchema],
   fhirTitle: { type: String, default: 'Specimen' },
});

class Specimen extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenSchema);
    this._type = 'FHIR::Specimen';
  }
};


module.exports.SpecimenSchema = SpecimenSchema;
module.exports.Specimen = Specimen;
