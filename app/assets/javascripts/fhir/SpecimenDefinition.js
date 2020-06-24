const mongoose = require('mongoose/browser');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DomainResourceSchema } = require('./DomainResource');
const { IdentifierSchema } = require('./Identifier');
const { SpecimenDefinitionTypeTestedSchema } = require('./SpecimenDefinitionTypeTested');
const { DomainResourceSchemaFunction } = require('./DomainResource');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SpecimenDefinitionSchema = DomainResourceSchemaFunction({
   identifier : IdentifierSchema,
   typeCollected : CodeableConceptSchema,
   patientPreparation : [CodeableConceptSchema],
   timeAspect : String,
   collection : [CodeableConceptSchema],
   typeTested : [SpecimenDefinitionTypeTestedSchema],
   fhirTitle: { type: String, default: 'SpecimenDefinition' },
});

class SpecimenDefinition extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenDefinitionSchema);
    this._type = 'FHIR::SpecimenDefinition';
  }
};


module.exports.SpecimenDefinitionSchema = SpecimenDefinitionSchema;
module.exports.SpecimenDefinition = SpecimenDefinition;
