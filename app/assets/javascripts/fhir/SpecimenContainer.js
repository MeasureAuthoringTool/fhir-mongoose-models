const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { IdentifierSchema } = require('./Identifier');
const { ReferenceSchema } = require('./Reference');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SpecimenContainerSchema = BackboneElementSchemaFunction({
   identifier : [IdentifierSchema],
   description : String,
   type : CodeableConceptSchema,
   capacity : SimpleQuantitySchema,
   specimenQuantity : SimpleQuantitySchema,
   additiveCodeableConcept : CodeableConceptSchema,
   additiveReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'SpecimenContainer' },
});

class SpecimenContainer extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenContainerSchema);
    this._type = 'FHIR::SpecimenContainer';
  }
};


module.exports.SpecimenContainerSchema = SpecimenContainerSchema;
module.exports.SpecimenContainer = SpecimenContainer;
