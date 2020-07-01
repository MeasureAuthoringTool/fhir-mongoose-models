const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const TestReportParticipantTypeSchema = ElementSchemaFunction({
  value: String,
  typeName: { type: String, default: 'TestReportParticipantType' },
  _type: { type: String, default: 'FHIR::TestReportParticipantType' },
});

class TestReportParticipantType extends mongoose.Document {
  constructor(object) {
    super(object, TestReportParticipantTypeSchema);
    this.typeName = 'TestReportParticipantType';
    this._type = 'FHIR::TestReportParticipantType';
  }
}

module.exports.TestReportParticipantTypeSchema = TestReportParticipantTypeSchema;
module.exports.TestReportParticipantType = TestReportParticipantType;
