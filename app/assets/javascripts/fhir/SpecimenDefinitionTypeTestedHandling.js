const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodeableConceptSchema } = require('./CodeableConcept');
const { DurationSchema } = require('./Duration');
const { RangeSchema } = require('./Range');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SpecimenDefinitionTypeTestedHandlingSchema = BackboneElementSchemaFunction({
   temperatureQualifier : CodeableConceptSchema,
   temperatureRange : RangeSchema,
   maxDuration : DurationSchema,
   instruction : String,
   fhirTitle: { type: String, default: 'SpecimenDefinitionTypeTestedHandling' },
});

class SpecimenDefinitionTypeTestedHandling extends mongoose.Document {
  constructor(object) {
    super(object, SpecimenDefinitionTypeTestedHandlingSchema);
    this._type = 'FHIR::SpecimenDefinitionTypeTestedHandling';
  }
};


module.exports.SpecimenDefinitionTypeTestedHandlingSchema = SpecimenDefinitionTypeTestedHandlingSchema;
module.exports.SpecimenDefinitionTypeTestedHandling = SpecimenDefinitionTypeTestedHandling;
