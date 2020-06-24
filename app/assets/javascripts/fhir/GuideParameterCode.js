const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GuideParameterCodeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'GuideParameterCode' },
});

class GuideParameterCode extends mongoose.Document {
  constructor(object) {
    super(object, GuideParameterCodeSchema);
    this._type = 'FHIR::GuideParameterCode';
  }
};


module.exports.GuideParameterCodeSchema = GuideParameterCodeSchema;
module.exports.GuideParameterCode = GuideParameterCode;
