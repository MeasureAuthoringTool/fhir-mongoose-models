const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { EncounterStatusSchema } = require('./EncounterStatus');
const { PeriodSchema } = require('./Period');

const EncounterStatusHistorySchema = BackboneElementSchemaFunction({
  status: EncounterStatusSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'EncounterStatusHistory' },
  _type: { type: String, default: 'FHIR::EncounterStatusHistory' },
});

class EncounterStatusHistory extends mongoose.Document {
  constructor(object) {
    super(object, EncounterStatusHistorySchema);
    this.typeName = 'EncounterStatusHistory';
    this._type = 'FHIR::EncounterStatusHistory';
  }
}

module.exports.EncounterStatusHistorySchema = EncounterStatusHistorySchema;
module.exports.EncounterStatusHistory = EncounterStatusHistory;
