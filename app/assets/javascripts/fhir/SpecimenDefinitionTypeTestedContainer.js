const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { SpecimenDefinitionTypeTestedContainerAdditiveSchema } = require('./SpecimenDefinitionTypeTestedContainerAdditive');

const SpecimenDefinitionTypeTestedContainerSchema = BackboneElementSchemaFunction({
  material: CodeableConceptSchema,
  type: CodeableConceptSchema,
  cap: CodeableConceptSchema,
  description: PrimitiveStringSchema,
  capacity: SimpleQuantitySchema,
  minimumVolumeSimpleQuantity: SimpleQuantitySchema,
  minimumVolumeString: PrimitiveStringSchema,
  additive: [SpecimenDefinitionTypeTestedContainerAdditiveSchema],
  preparation: PrimitiveStringSchema,
  typeName: { type: String, default: 'SpecimenDefinitionTypeTestedContainer' },
  _type: { type: String, default: 'FHIR::SpecimenDefinitionTypeTestedContainer' },
});

class SpecimenDefinitionTypeTestedContainer extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenDefinitionTypeTestedContainerSchema);
    this.typeName = 'SpecimenDefinitionTypeTestedContainer';
    this._type = 'FHIR::SpecimenDefinitionTypeTestedContainer';
  }
}

module.exports.SpecimenDefinitionTypeTestedContainerSchema = SpecimenDefinitionTypeTestedContainerSchema;
module.exports.SpecimenDefinitionTypeTestedContainer = SpecimenDefinitionTypeTestedContainer;
