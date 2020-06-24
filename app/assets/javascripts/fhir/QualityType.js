const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const QualityTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'QualityType' },
});

class QualityType extends mongoose.Document {
  constructor(object) {
    super(object, QualityTypeSchema);
    this._type = 'FHIR::QualityType';
  }
};


module.exports.QualityTypeSchema = QualityTypeSchema;
module.exports.QualityType = QualityType;
