const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { DurationSchema } = require('./Duration');
const { SimpleQuantitySchema } = require('./SimpleQuantity');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const MedicationKnowledgeKineticsSchema = BackboneElementSchemaFunction({
   areaUnderCurve : [SimpleQuantitySchema],
   lethalDose50 : [SimpleQuantitySchema],
   halfLifePeriod : DurationSchema,
   fhirTitle: { type: String, default: 'MedicationKnowledgeKinetics' },
});

class MedicationKnowledgeKinetics extends mongoose.Document {
  constructor(object) {
    super(object, MedicationKnowledgeKineticsSchema);
    this._type = 'FHIR::MedicationKnowledgeKinetics';
  }
};


module.exports.MedicationKnowledgeKineticsSchema = MedicationKnowledgeKineticsSchema;
module.exports.MedicationKnowledgeKinetics = MedicationKnowledgeKinetics;
