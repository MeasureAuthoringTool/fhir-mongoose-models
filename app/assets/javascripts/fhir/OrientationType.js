const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const OrientationTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'OrientationType' },
});

class OrientationType extends mongoose.Document {
  constructor(object) {
    super(object, OrientationTypeSchema);
    this._type = 'FHIR::OrientationType';
  }
};


module.exports.OrientationTypeSchema = OrientationTypeSchema;
module.exports.OrientationType = OrientationType;
