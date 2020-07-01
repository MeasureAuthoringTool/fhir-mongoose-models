const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DurationSchema } = require('./Duration');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { RangeSchema } = require('./Range');

const SpecimenDefinitionTypeTestedHandlingSchema = BackboneElementSchemaFunction({
  temperatureQualifier: CodeableConceptSchema,
  temperatureRange: RangeSchema,
  maxDuration: DurationSchema,
  instruction: PrimitiveStringSchema,
  typeName: { type: String, default: 'SpecimenDefinitionTypeTestedHandling' },
  _type: { type: String, default: 'FHIR::SpecimenDefinitionTypeTestedHandling' },
});

class SpecimenDefinitionTypeTestedHandling extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenDefinitionTypeTestedHandlingSchema);
    this.typeName = 'SpecimenDefinitionTypeTestedHandling';
    this._type = 'FHIR::SpecimenDefinitionTypeTestedHandling';
  }
}

module.exports.SpecimenDefinitionTypeTestedHandlingSchema = SpecimenDefinitionTypeTestedHandlingSchema;
module.exports.SpecimenDefinitionTypeTestedHandling = SpecimenDefinitionTypeTestedHandling;
