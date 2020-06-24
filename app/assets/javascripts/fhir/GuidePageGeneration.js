const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GuidePageGenerationSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'GuidePageGeneration' },
});

class GuidePageGeneration extends mongoose.Document {
  constructor(object) {
    super(object, GuidePageGenerationSchema);
    this._type = 'FHIR::GuidePageGeneration';
  }
};


module.exports.GuidePageGenerationSchema = GuidePageGenerationSchema;
module.exports.GuidePageGeneration = GuidePageGeneration;
