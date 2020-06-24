const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const TestScriptMetadataLinkSchema = BackboneElementSchemaFunction({
   url : String,
   description : String,
   fhirTitle: { type: String, default: 'TestScriptMetadataLink' },
});

class TestScriptMetadataLink extends mongoose.Document {
  constructor(object) {
    super(object, TestScriptMetadataLinkSchema);
    this._type = 'FHIR::TestScriptMetadataLink';
  }
};


module.exports.TestScriptMetadataLinkSchema = TestScriptMetadataLinkSchema;
module.exports.TestScriptMetadataLink = TestScriptMetadataLink;
