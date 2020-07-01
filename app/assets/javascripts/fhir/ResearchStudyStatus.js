const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const ResearchStudyStatusSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'ResearchStudyStatus' },
  _type: { type: String, default: 'FHIR::ResearchStudyStatus' },
});

class ResearchStudyStatus extends mongoose.Document {
  constructor(object) {
    super(object, ResearchStudyStatusSchema);
    this.typeName = 'ResearchStudyStatus';
    this._type = 'FHIR::ResearchStudyStatus';
  }
}

module.exports.ResearchStudyStatusSchema = ResearchStudyStatusSchema;
module.exports.ResearchStudyStatus = ResearchStudyStatus;
