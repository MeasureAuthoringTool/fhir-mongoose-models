const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PeriodSchema } = require('./Period');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EncounterClassHistorySchema = BackboneElementSchemaFunction({
   class : CodingSchema,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'EncounterClassHistory' },
});

class EncounterClassHistory extends mongoose.Document {
  constructor(object) {
    super(object, EncounterClassHistorySchema);
    this._type = 'FHIR::EncounterClassHistory';
  }
};


module.exports.EncounterClassHistorySchema = EncounterClassHistorySchema;
module.exports.EncounterClassHistory = EncounterClassHistory;
