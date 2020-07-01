const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DurationSchema } = require('./Duration');
const { PrimitiveBooleanSchema } = require('./PrimitiveBoolean');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SpecimenContainedPreferenceSchema } = require('./SpecimenContainedPreference');
const { SpecimenDefinitionTypeTestedContainerSchema } = require('./SpecimenDefinitionTypeTestedContainer');
const { SpecimenDefinitionTypeTestedHandlingSchema } = require('./SpecimenDefinitionTypeTestedHandling');

const SpecimenDefinitionTypeTestedSchema = BackboneElementSchemaFunction({
  isDerived: PrimitiveBooleanSchema,
  type: CodeableConceptSchema,
  preference: SpecimenContainedPreferenceSchema,
  container: SpecimenDefinitionTypeTestedContainerSchema,
  requirement: PrimitiveStringSchema,
  retentionTime: DurationSchema,
  rejectionCriterion: [CodeableConceptSchema],
  handling: [SpecimenDefinitionTypeTestedHandlingSchema],
  typeName: { type: String, default: 'SpecimenDefinitionTypeTested' },
  _type: { type: String, default: 'FHIR::SpecimenDefinitionTypeTested' },
});

class SpecimenDefinitionTypeTested extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenDefinitionTypeTestedSchema);
    this.typeName = 'SpecimenDefinitionTypeTested';
    this._type = 'FHIR::SpecimenDefinitionTypeTested';
  }
}

module.exports.SpecimenDefinitionTypeTestedSchema = SpecimenDefinitionTypeTestedSchema;
module.exports.SpecimenDefinitionTypeTested = SpecimenDefinitionTypeTested;
