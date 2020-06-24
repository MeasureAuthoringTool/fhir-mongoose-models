const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const XPathUsageTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'XPathUsageType' },
});

class XPathUsageType extends mongoose.Document {
  constructor(object) {
    super(object, XPathUsageTypeSchema);
    this._type = 'FHIR::XPathUsageType';
  }
};


module.exports.XPathUsageTypeSchema = XPathUsageTypeSchema;
module.exports.XPathUsageType = XPathUsageType;
