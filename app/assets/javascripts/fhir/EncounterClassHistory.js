const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { CodingSchema } = require('./Coding');
const { PeriodSchema } = require('./Period');

const EncounterClassHistorySchema = BackboneElementSchemaFunction({
  class: CodingSchema,
  period: PeriodSchema,
  typeName: { type: String, default: 'EncounterClassHistory' },
  _type: { type: String, default: 'FHIR::EncounterClassHistory' },
});

class EncounterClassHistory extends mongoose.Document {
  constructor(object) {
    super(object, EncounterClassHistorySchema);
    this.typeName = 'EncounterClassHistory';
    this._type = 'FHIR::EncounterClassHistory';
  }
}

module.exports.EncounterClassHistorySchema = EncounterClassHistorySchema;
module.exports.EncounterClassHistory = EncounterClassHistory;
