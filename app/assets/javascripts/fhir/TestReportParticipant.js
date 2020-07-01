const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');
const { PrimitiveStringSchema } = require('./PrimitiveString');
const { PrimitiveUriSchema } = require('./PrimitiveUri');
const { TestReportParticipantTypeSchema } = require('./TestReportParticipantType');

const TestReportParticipantSchema = BackboneElementSchemaFunction({
  type: TestReportParticipantTypeSchema,
  uri: PrimitiveUriSchema,
  display: PrimitiveStringSchema,
  typeName: { type: String, default: 'TestReportParticipant' },
  _type: { type: String, default: 'FHIR::TestReportParticipant' },
});

class TestReportParticipant extends mongoose.Document {
  constructor(object) {
    super(object, TestReportParticipantSchema);
    this.typeName = 'TestReportParticipant';
    this._type = 'FHIR::TestReportParticipant';
  }
}

module.exports.TestReportParticipantSchema = TestReportParticipantSchema;
module.exports.TestReportParticipant = TestReportParticipant;
