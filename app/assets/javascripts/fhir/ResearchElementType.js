const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const ResearchElementTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'ResearchElementType' },
});

class ResearchElementType extends mongoose.Document {
  constructor(object) {
    super(object, ResearchElementTypeSchema);
    this._type = 'FHIR::ResearchElementType';
  }
};


module.exports.ResearchElementTypeSchema = ResearchElementTypeSchema;
module.exports.ResearchElementType = ResearchElementType;
