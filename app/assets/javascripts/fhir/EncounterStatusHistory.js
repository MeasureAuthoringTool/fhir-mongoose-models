const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { EncounterStatusSchema } = require('./EncounterStatus');
const { PeriodSchema } = require('./Period');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const EncounterStatusHistorySchema = BackboneElementSchemaFunction({
   status : EncounterStatusSchema,
   period : PeriodSchema,
   fhirTitle: { type: String, default: 'EncounterStatusHistory' },
});

class EncounterStatusHistory extends mongoose.Document {
  constructor(object) {
    super(object, EncounterStatusHistorySchema);
    this._type = 'FHIR::EncounterStatusHistory';
  }
};


module.exports.EncounterStatusHistorySchema = EncounterStatusHistorySchema;
module.exports.EncounterStatusHistory = EncounterStatusHistory;
