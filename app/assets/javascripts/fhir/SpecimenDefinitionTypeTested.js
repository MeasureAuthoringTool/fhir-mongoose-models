const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DurationSchema } = require('./Duration');
const { SpecimenContainedPreferenceSchema } = require('./SpecimenContainedPreference');
const { SpecimenDefinitionTypeTestedContainerSchema } = require('./SpecimenDefinitionTypeTestedContainer');
const { SpecimenDefinitionTypeTestedHandlingSchema } = require('./SpecimenDefinitionTypeTestedHandling');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SpecimenDefinitionTypeTestedSchema = BackboneElementSchemaFunction({
   isDerived : Boolean,
   type : CodeableConceptSchema,
   preference : SpecimenContainedPreferenceSchema,
   container : SpecimenDefinitionTypeTestedContainerSchema,
   requirement : String,
   retentionTime : DurationSchema,
   rejectionCriterion : [CodeableConceptSchema],
   handling : [SpecimenDefinitionTypeTestedHandlingSchema],
   fhirTitle: { type: String, default: 'SpecimenDefinitionTypeTested' },
});

class SpecimenDefinitionTypeTested extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenDefinitionTypeTestedSchema);
    this._type = 'FHIR::SpecimenDefinitionTypeTested';
  }
};


module.exports.SpecimenDefinitionTypeTestedSchema = SpecimenDefinitionTypeTestedSchema;
module.exports.SpecimenDefinitionTypeTested = SpecimenDefinitionTypeTested;
