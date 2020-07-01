const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');

const SpecimenDefinitionTypeTestedContainerAdditiveSchema = BackboneElementSchemaFunction({
  additiveCodeableConcept: CodeableConceptSchema,
  additiveReference: ReferenceSchema,
  typeName: { type: String, default: 'SpecimenDefinitionTypeTestedContainerAdditive' },
  _type: { type: String, default: 'FHIR::SpecimenDefinitionTypeTestedContainerAdditive' },
});

class SpecimenDefinitionTypeTestedContainerAdditive extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenDefinitionTypeTestedContainerAdditiveSchema);
    this.typeName = 'SpecimenDefinitionTypeTestedContainerAdditive';
    this._type = 'FHIR::SpecimenDefinitionTypeTestedContainerAdditive';
  }
}

module.exports.SpecimenDefinitionTypeTestedContainerAdditiveSchema = SpecimenDefinitionTypeTestedContainerAdditiveSchema;
module.exports.SpecimenDefinitionTypeTestedContainerAdditive = SpecimenDefinitionTypeTestedContainerAdditive;
