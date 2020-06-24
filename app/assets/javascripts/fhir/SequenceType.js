const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const SequenceTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'SequenceType' },
});

class SequenceType extends mongoose.Document {
  constructor(object) {
    super(object, SequenceTypeSchema);
    this._type = 'FHIR::SequenceType';
  }
};


module.exports.SequenceTypeSchema = SequenceTypeSchema;
module.exports.SequenceType = SequenceType;
