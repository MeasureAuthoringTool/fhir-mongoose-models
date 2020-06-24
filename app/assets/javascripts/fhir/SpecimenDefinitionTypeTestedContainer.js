const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { SpecimenDefinitionTypeTestedContainerAdditiveSchema } = require('./SpecimenDefinitionTypeTestedContainerAdditive');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SpecimenDefinitionTypeTestedContainerSchema = BackboneElementSchemaFunction({
   material : CodeableConceptSchema,
   type : CodeableConceptSchema,
   cap : CodeableConceptSchema,
   description : String,
   capacity : SimpleQuantitySchema,
   minimumVolumeSimpleQuantity : SimpleQuantitySchema,
   minimumVolumeString : String,
   additive : [SpecimenDefinitionTypeTestedContainerAdditiveSchema],
   preparation : String,
   fhirTitle: { type: String, default: 'SpecimenDefinitionTypeTestedContainer' },
});

class SpecimenDefinitionTypeTestedContainer extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenDefinitionTypeTestedContainerSchema);
    this._type = 'FHIR::SpecimenDefinitionTypeTestedContainer';
  }
};


module.exports.SpecimenDefinitionTypeTestedContainerSchema = SpecimenDefinitionTypeTestedContainerSchema;
module.exports.SpecimenDefinitionTypeTestedContainer = SpecimenDefinitionTypeTestedContainer;
