const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SpecimenDefinitionTypeTestedContainerAdditiveSchema = BackboneElementSchemaFunction({
   additiveCodeableConcept : CodeableConceptSchema,
   additiveReference : ReferenceSchema,
   fhirTitle: { type: String, default: 'SpecimenDefinitionTypeTestedContainerAdditive' },
});

class SpecimenDefinitionTypeTestedContainerAdditive extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenDefinitionTypeTestedContainerAdditiveSchema);
    this._type = 'FHIR::SpecimenDefinitionTypeTestedContainerAdditive';
  }
};


module.exports.SpecimenDefinitionTypeTestedContainerAdditiveSchema = SpecimenDefinitionTypeTestedContainerAdditiveSchema;
module.exports.SpecimenDefinitionTypeTestedContainerAdditive = SpecimenDefinitionTypeTestedContainerAdditive;
